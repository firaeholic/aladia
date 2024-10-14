<template>
    <div class="flex justify-center items-center mt-24 gap-5">
        <input ref="pinInput0" :value="pinValues[0]" type="text" class="number-input num1" maxlength="1" @input="limitInput(0, $event)" />
        <input ref="pinInput1" :value="pinValues[1]" type="text" class="number-input num2" maxlength="1" @input="limitInput(1, $event)" />
        <input ref="pinInput2" :value="pinValues[2]" type="text" class="number-input num3" maxlength="1" @input="limitInput(2, $event)" />
        <input ref="pinInput3" :value="pinValues[3]" type="text" class="number-input num4" maxlength="1" @input="limitInput(3, $event)" />
        <input ref="pinInput4" :value="pinValues[4]" type="text" class="number-input num5" maxlength="1" @input="limitInput(4, $event)" />
        <input ref="pinInput5" :value="pinValues[5]" type="text" class="number-input num6" maxlength="1" @input="limitInput(5, $event)" />
    </div>
</template>

<script>

  export default {
    methods:{
        limitInput(index, event) {
                const value = event.target.value;
                
                const digitOnly = value.replace(/\D/g, '');
                event.target.value = digitOnly; 

                if (digitOnly.length > 1) {
                    event.target.value = digitOnly.charAt(0);
                }

                const updatedValues = [...this.pinValues]; 
                updatedValues[index] = event.target.value;  

                this.$emit('update:pinValues', updatedValues);
                this.pinValues = updatedValues; 

                // Move focus to the next input if current one is filled and not the last
                if (digitOnly && index < updatedValues.length - 1) {
                    this.$refs[`pinInput${index + 1}`].focus();  
                }
            },
    },
    name: 'Codefield',
    props: {
        pinValues: {
                type: Array,
                required: false,
            },
    },
  };
</script>
<style>
    .number-input {
    width: 40px;
    height: 40px; 
    text-align: center; 
    margin: 0;
    border: 1px solid #ccc; 
    border-radius: 5px; 
    font-size: 16px; 
}
html{
      background-color:black
    }
</style>