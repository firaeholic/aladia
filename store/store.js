export const store = {
    users: [
      { email: 'firatheking@gmail.com', password: 'Iamyours1!', isVerified: true, name: 'Frank', surname: 'Fira' },
      { email: 'someone2@example.com', password: 'User2!aaa', isVerified: true },
      { email: 'user3@example.com', password: 'User3!aaa', isVerified: false },
    ],
    
    isEmailRegistered(email) {
      return this.users.some(user => user.email === email);
    },
    
    isValidLogin(email, password) {
        const user = this.users.find(user => user.email === email);
        return user ? user.password === password : false; 
    },

    addUser(email, password) {
      if (!this.isEmailRegistered(email)) {
          this.users.push({ email, password });
          return true; 
      }
        return false;
    },
    isUserVerified(email){
      const user = this.users.find(user => user.email === email)
      return user ? user.isVerified == true : false
    },
    
    verifyUser(email){
      const user = this.users.find(user => user.email === email)
      if (user){
        user.isVerified = true
        return true
      }
      return false
    },

    getName(email){
      const user = this.users.find(user => user.email === email)
      return user.name
    },
    getSurname(email){
      const user = this.users.find(user => user.email === email)
      return user.surname
    }

  };