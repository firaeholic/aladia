<template>
    <div v-if="currentView === 'login'" class="login-form flex flex-col items-center justify-center min-h-screen bg-black">
        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
            <Hero title="Welcome to Aladia" details="Create or access your account from here"/>
            <h4 class="mb-5 text-white text-center text-sm email">{{ email }}</h4>
            <div class="relative mb-5 m-4 mt-1">
                <font-awesome-icon :icon="['fas', 'envelope']" class="absolute left-3 top-3"/>
                <input
                    type="email"
                    name="email"
                    :value="emailValue"
                    ref="emailInput"
                    placeholder="Email Address"
                    class="w-full p-2 email-field pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                />
                <AnyText v-if="isEmailInvalid" errTitle="Invalid Password"/>
                <Button title="Enter" @click="goToNewPage" />
                <div class="flex items-center mb-3">
                    <div class="flex-1 h-px bg-gradient-to-r from-transparent to-white"></div>
                    <span class="mx-2 text-white p-2">Or</span>
                    <div class="flex-1 h-px bg-gradient-to-l from-transparent to-white"></div>
                </div>
                <!-- Social login buttons -->
                <div class="flex flex-col space-y-4">
                    <button @click="loginWithGoogle" class="login-google w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start">
                        <svg class="ml-20" width="20px" height="20px" viewBox="-0.5 0 48 48" fill="#000000">
                            <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.905-6.051c-.448-1.364-.698-2.82-.698-4.337z" fill="#FBBC05"></path>
                            <path d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.511 13.182-9.511z" fill="#EB4335"></path>
                            <path d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z" fill="#34A853"></path>
                            <path d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.614z" fill="#4285F4"></path>
                        </svg>
                        <span class="ml-4">Continue with Google</span>
                    </button> 
                    <button class="w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start transition-colors duration-300">
                        <img class="w-5 h-5 object-cover ml-20" src="../assets/fb.png">
                        <span class="ml-4">Continue with Facebook</span>
                    </button>

                    <button  @click="loginWithApple" class="apple-login w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start">
                        <svg class="ml-20" width="20px" height="20px" viewBox="-1.5 0 20 20" fill="#000000">
                                <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#ffffff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M57.571 7282.193c.729-.845 1.22-2.022 1.086-3.193-.95.04-2.221.671-2.974 1.515-.677.749-1.267 1.946-1.108 3.094 1.172.087 2.368-.57 3.007-1.416zm2.628 7.432c.029 3.027 2.77 4.034 2.8 4.047-.022.071-.438 1.435-1.444 2.845-.87 1.218-1.773 2.431-3.196 2.457-1.398.025-1.848-.794-3.447-.794-1.598 0-2.098.768-3.421.819-1.373.049-2.42-1.318-3.297-2.532-1.794-2.483-3.164-7.017-1.324-10.077.914-1.519 2.547-2.482 4.321-2.506 1.348-.025 2.621.869 3.445.869.824 0 2.371-1.075 3.997-.917.681.027 2.592.263 3.819 1.984-.099.059-2.28 1.275-2.256 3.805z" id="apple-[#173]"></path>
                                    </g>
                                </g>
                            </svg>
                        <span class="ml-4">Continue with Apple</span>
                    </button>
                </div>
                <div class="href=# cursor-pointer text-white text-center mt-7 text-sm font-semibold text-custom-gray">Terms & conditions</div>
            </div>
        </div>
        </div>
    </div>

    <div v-if="currentView === 'exists'" class="login-page flex flex-col items-center justify-center min-h-screen bg-black">
        <!-- Box container -->
        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
                <AnyText title="Back to Login" @click="goToLogin"/>
                <Navbar title="Welcome to Aladia" details="Create or access your account from here"/>
                <div>
                    <div class="text-white text-center text-sm mb-6">Enter your password</div>
                    <input
                        type="password"
                        :value="password"
                        ref="passInput"
                        @input="$emit('update:password', $event.target.value)"
                        placeholder="Password"
                        class="w-full password-field h-[40px] p-2 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                    />
                    <div class="flex flex-row items-center justify-between">
                        <AnyText v-if="passwordInvalid"  errTitle="Invalid Password"/>
                        <div @click="goToRecovery" class="recover-account ml-auto text-custom-gray underline text-right text-sm cursor-pointer">
                            Forgot password?
                        </div>
                    </div>
                    <Button title="Enter" @click="verifyLogin" />
                </div>
            </div>
        </div>
    </div>

    <div v-if="currentView === 'recover'" class="recover flex flex-col items-center justify-center min-h-screen bg-black">
        <!-- Box container -->
        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
                <div class="text-white text-center cursor-pointer" @click="goToLogin">Back to Login</div>
                <Navbar title="Password Recovery" details="Retrieve your password through your registration mail"/>
                <div class="text-white text-center mt-6">
                    <p class="text-sm">Enter recovery email</p>
                    <p class="text-custom-gray mt-6 font-thin">A recovery mail will be sent to this address. Be sure that it is correct before submitting</p>
                    <div class="flex flex-row align-center justify-center mt-6">
                        <img src="../assets/header.png" alt="Random Image" class="w-20 h-20 object-cover pl-3" />
                        <img src="../assets/header.png" alt="Random Image" class="w-20 h-20 object-cover pl-3" />
                        <img src="../assets/header.png" alt="Random Image" class="w-20 h-20 object-cover pl-3" />
                    </div>
                    <input
                        name="recovery-email"
                        ref="recoverInput"
                        :value="recoveryEmail"
                        placeholder="Email Address"
                        class="w-full recovery-email p-2 email-field mt-6 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                    />
                    <Button title="Enter" @click="sendRecovery" />
                </div>
            </div>
        </div>
    </div>

    <div v-if="currentView === 'recoverySent'" class="recover-email flex flex-col items-center justify-center min-h-screen bg-black">

        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
                <Navbar title="Password Recovery" details="Retrieve your password through your registration mail"/>
                <div>
                    <div class="flex flex-row align-center text-custom-gray justify-between text-sm p-5">
                        <p class="text-custom-gray">Recovery link sent to:</p>
                        <p @click="goToRecovery" class="hover:underline cursor-pointer">{{ this.$refs.recoverInput.value}}</p>
                    </div>
                    <p class="mt-20 text-custom-gray text-center mb-10">Check your email to change<br> your password!</p>
                    <Button title="Send Email Again" @click="sendRecoveryAgain" />
                </div>
            </div>
        </div>
    </div>

    <div v-if = "currentView == 'form'">
        <div class="next-page flex flex-col items-center justify-center min-h-screen bg-black">
   
            <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
                <div class="w-full h-full bg-black rounded-lg p-5">
                    <BackText title="Back to Login" @click="goToLogin"/>
                     <div class="flex flex-row ml-6 pt-5">
                        <div class="flex w-[200px] h-[100px] mb-5  border border-custom-gray mt-3 custom-rounded" style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(246, 246, 246, 0.1) 49.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(246, 246, 246, 0.1) 74.56%, rgba(255, 255, 255, 0) 100%);">
                            <img src="../assets/header.png" alt="Random Image" class="w-24 h-24 object-cover pl-3" />
                        </div>
                        <div class="text-white ml-4 mr-16"> 
                            <h2 class="text-base font-semibold text-sm mb-2 mt-6">Nice to meet you</h2> 
                            <p class="text-custom-gray text-sm">Upload a profile picture
                                and complete your
                                presentation</p>
                        </div>
                    </div>
 
                    <div class="flex justify-center items-center mt-4">
                        <input type="checkbox" id="accept" v-model="accepted" class="mr-2">
                        <label for="accept" :class="{'checked text-red-500 text-sm': !accepted && submitClicked , 'text-custom-gray text-sm': accepted || !submitClicked}">I accept <a :class="{'text-red-500 underline': !accepted && submitClicked, 'text-white underline': accepted || !submitClicked}">Terms & Conditions</a> and <a :class="{'text-red-500 underline': !accepted && submitClicked, 'text-white underline': accepted || !submitClicked}">Privacy Policy</a></label>
                    </div>

                    <div>
                        <h2 class="text-center m-3 text-white text-xs">
                            Enter your details
                            <input
                                type="text"
                                :value="name"
                                ref="nameInput"
                                @input="$emit('update:name', $event.target.value)"
                                placeholder="Name"
                                class="w-full name-field mt-4 h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                :value="surname"
                                ref="surnameInput"
                                @input="$emit('update:surname', $event.target.value)"
                                placeholder="Surname"
                                class="w-full surname-field h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="email"
                                :value="emailValue"
                                :disabled="true"
                                @input="$emit('update:emailValue', $event.target.value)"
                                placeholder="Email Address"
                                class="w-full email- h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-gray-400 text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="password"
                                :value="password"
                                @input="$emit('update:password', $event.target.value)"
                                placeholder="Password"
                                class="w-full password-field h-[40px] p-2 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <div v-if="passwordWeak" :class="{'pass-error text-red-500 text-xs text-left': isWeak, 'pass-error text-orange-500 text-xs text-left': isMedium,'pass-error text-yellow-500 text-xs text-left': isGood,'pass-error text-green-500 text-xs text-left': isStrong, 'pass-error text-red-500 text-xs text-left': initial}">
                                {{  passwordWeakError }}
                            </div>
                            <input
                                type="password"
                                :value="confirm"
                                @input="$emit('update:confirm', $event.target.value)"
                                placeholder="Confirm Password"
                                class="w-full confirm-field h-[40px] mt-4 p-2 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <div v-if="passwordMismatch" class="mismatch-field text-red-500 text-xs text-left">
                                Passwords don't match
                            </div>
                            <Button title="Enter" @click="handleSubmit" />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="currentView === 'code'" class="enter-code flex flex-col items-center justify-center min-h-screen bg-black">
 
        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
                <div class="flex flex-col items-center justify-center mb-5 p-6 custom-rounded">
                    <img src="../assets/header.png" alt="Random Image" class="w-28 h-28 object-cover pl-3" />
                    <Header :namae=this.name :surnamae=this.surname title='Thanks for joining Aladia.' details="Please enter below the 6-digit code we sent you through your registration e-mail:"/>
                    <div class="flex justify-center items-center mt-24 gap-5">
                        <input ref="pinInput0" :value="pinValues[0]" type="text" class="number-input num1" maxlength="1" @input="limitInput(0, $event)" />
                        <input ref="pinInput1" :value="pinValues[1]" type="text" class="number-input num2" maxlength="1" @input="limitInput(1, $event)" />
                        <input ref="pinInput2" :value="pinValues[2]" type="text" class="number-input num3" maxlength="1" @input="limitInput(2, $event)" />
                        <input ref="pinInput3" :value="pinValues[3]" type="text" class="number-input num4" maxlength="1" @input="limitInput(3, $event)" />
                        <input ref="pinInput4" :value="pinValues[4]" type="text" class="number-input num5" maxlength="1" @input="limitInput(4, $event)" />
                        <input ref="pinInput5" :value="pinValues[5]" type="text" class="number-input num6" maxlength="1" @input="limitInput(5, $event)" />
                    </div>

                    <a @click="sendRecoveryAgain"class='text-white text-xs mt-6 text-custom-gray cursor-pointer'>You didn't receive any mail?</a>
                    <Button title="Enter" @click="verifyCode" />
                    <div class="to-login text-black text-center cursor-pointer" @click="goToLogin">Back to Login</div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="currentView === 'done'" class="done-page login-form flex flex-col items-center justify-center min-h-screen bg-black">

        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
                <div class="flex flex-col items-center justify-center mb-5 p-6 custom-rounded">
                    <Header :namae=getName :surnamae=getSurname title='Thanks for joining Aladia.' />
                    <img src="../assets/header.png" alt="Random Image" class=" mt-20 w-28 h-28 object-cover pl-3" />
                    <Button title="Enter Marketplace" @click="goToLogin" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

import Hero from "./Navbar.vue"
import Button from "./Button.vue";
import Header from "./Header.vue";
import {store} from "@/store/store"
import { useToast } from 'vue-toastification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AnyText from "./Text.vue";

library.add(faEnvelope);

    export default {
        components: {
            Hero,
            Button,
            FontAwesomeIcon,
            Header,
            AnyText
        },
        created(){
            if (this.termsAccepted) {
                this.accepted = true;
            }
        },
        data(){
            return {
                isEmailInvalid: false,
                isPassInvalid: false,
                isPasswordVisible: false,
                emailExists: false,
                validLogin: false,
                currentView: 'login',
                passwordWeakError: '',
                accepted: false,
                submitClicked: false, 
                isStrong: false,
                isWeak: false,
                isMedium: false,
                isGood: false,
                initial: true, 
                pinValues: ["", "", "", "", "", ""],
                
        };
        },
        methods: {
            handleSubmit() {
                if(this.emailValue && this.name && this.surname && this.password && this.confirm){
                    this.submitClicked = true
                    if(this.accepted == true){
                        const userAdded = store.addUser(this.emailValue, this.password);
                        if (userAdded){
                            this.currentView = 'code' 
                        }
                    }
                } 

            },
            verifyCode() {
                const allFieldsFilled = this.pinValues.every(value => value !== '');
                const allValuesAreOne = this.pinValues.every(value => value === '1');
                if (allFieldsFilled) {
                    if(allValuesAreOne){
                        const toast = useToast(); 
                        toast.error("[400] Invalid verification code - /v2/auth/verify-user", {
                            position: "top-right",
                            timeout: 3000,
                        });
                    }else{
                        store.verifyUser(this.emailValue)
                        this.currentView = 'done'; 
                    }

                }
            },


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


            validateEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            },
            validatePassword(password) {
                const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
                return passwordPattern.test(password);
            },
            goToNewPage() {
                const email = this.$refs.emailInput.value;
                this.accepted = this.termsAccepted
                this.emailExists = store.isEmailRegistered(email);
                this.isEmailInvalid = !this.validateEmail(email);
                if (!this.isEmailInvalid) {
                    this.$emit('update:emailValue', email);
                    if (this.emailExists){
                        const isVerified = store.isUserVerified(email)
                        if(isVerified){
                            this.currentView = 'exists';
                        }else {
                            this.currentView = 'code' 
                        }
                    } else {
                        this.currentView = 'form';
                    }
            }
            },
            verifyLogin(){
                const email = this.emailValue;
                const password = this.password;
                this.isPassInvalid = !this.validatePassword(password);
                if(password.length > 0 && !this.isPassInvalid){
                    this.validLogin = store.isValidLogin(email, password)
                    if(this.validLogin){
                        this.currentView = 'done';
                    }else {
                        const toast = useToast(); 
                        toast.error("Invalid Credentials!", {
                            position: "top-right",
                            timeout: 3000,
                        });
                    }
                }
                
            },
            goToLogin(){
                this.currentView = 'login';
            },
            goToRecovery(){
                this.currentView = 'recover';
            },
            sendRecovery(){
                const email = this.$refs.recoverInput.value;
                console.log(email)
                this.emailExists = store.isEmailRegistered(email);
                if (this.emailExists){
                    this.currentView = 'recoverySent';
                } else {
                    const toast = useToast(); 
                    toast.error("[404] User not found - /v2/auth/forgot-password!", {
                        position: "top-right",
                        timeout: 3000,
                        });
                }
            },
            sendRecoveryAgain(){
                const toast = useToast(); 
                    toast.success("Sent successfully!", {
                        position: "top-right",
                        timeout: 3000,
                    });
            },
            loginWithGoogle(){
               const url = 'https://dev-api.aladia.io/v2/auth/google'
               window.open(url, 'Google Login', 'width=600,height=600,resizable=yes');
            },
            loginWithApple(){
               const url = 'https://appleid.apple.com/auth/authorize?client_id=com.aladia.io.web&redirect_uri=https%3A%2F%2Fdevelop.aladia.io%2Fauth%2Fcallback&response_type=code%20id_token&state=%5BANYTHING%5D&scope=name%20email&nonce=123456&response_mode=web_message&frame_id=23ba94d9-30c5-491d-9fd7-7eadf4876a01&m=11&v=1.5.5'
               window.open(url, 'Apple Login Login', 'width=600,height=600,resizable=yes');
            },
        },
        name: "Login",
        props: {
            emailValue: {
                type: String,
                required: true,
            },
            recoveryEmail: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: false,
            },
            surname: {
                type: String,
                required: false,
            },
            password: {
                type: String,
                required: false,
            },
            confirm: {
                type: String,
                required: false,
            },
            termsAccepted: {
                type: Boolean,
                required: false,
            },
            pinValues: {
                type: Array,
                required: false,
            },

        },
        computed: {
            getName(){
                const name = store.getName(this.emailValue)

                return name !== undefined ? name : this.name
            },
            getSurname(){
                const surname = store.getSurname(this.emailValue)

                return surname !== undefined ? surname : this.surname
            },
            passwordInvalid(){
                if (this.password.length > 0){
                    const password = this.password;
                    this.isPassInvalid = !this.validatePassword(password);
                    if (this.isPassInvalid) {
                        return true
                    }else {
                        return false
                    }
                }
            },
            passwordMismatch() {
                return this.password && this.confirm && this.password !== this.confirm;
            },
            passwordWeak() {
                if (this.password.length > 0 && this.password.length < 8) {
                    this.passwordWeakError = '8 character minimum';
                    this.isWeak = true;
                    this.isMedium = false;
                    this.isGood = false;
                    this.isStrong = false;
                    this.initial = true;
                    return true;
                }
                if (this.password.length > 0 && !/[A-Z]/.test(this.password)) {
                    this.passwordWeakError = 'Upper case letter required';
                    this.isWeak = false;
                    this.isMedium = true;
                    this.isGood = false;
                    this.isStrong = false;
                    this.initial = false;
                    return true;
                }
                if (this.password.length > 0 && !/\d/.test(this.password)) {
                    this.passwordWeakError = 'Number required';
                    this.isWeak = false;
                    this.isMedium = false;
                    this.isGood = true;
                    this.isStrong = false;
                    this.initial = false;
                    return true;
                }
                if (this.password.length > 0 && !/[!@#$%^&*(),.?":{}|<>]/.test(this.password)) {
                    this.passwordWeakError = 'Symbol required(@$!%*?&)';
                    this.isWeak = false;
                    this.isMedium = false;
                    this.isGood = true;
                    this.isStrong = false;
                    this.initial = false;
                    return true;
                }
                
                // If all conditions pass, the password is not weak
                if (this.password.length > 0){
                    this.passwordWeakError = 'Strong Password'
                    this.isWeak = false;
                    this.isMedium = false;
                    this.isGood = false;
                    this.isStrong = true;
                    this.initial = false;
                    return true
                }
                this.passwordWeakError = ''
                return true;
                },
        }
    }
</script>

<style scoped>
.white-icon {
  color: white; /* Apply white color to the Apple logo */
  font-size: 50px; /* Adjust the size as needed */
}
    .custom-rounded {
        border-radius: 3px; 
    }
    .border-custom-gray {
        border-color: #2e2e2e; 
    }
    .text-custom-gray {
        color: #909090; 
        font-weight: 600;
    }
    .number-input {
    width: 40px;
    height: 40px; 
    text-align: center; 
    margin: 0;
    border: 1px solid #ccc; 
    border-radius: 5px; 
    font-size: 16px; 
}


</style>
  