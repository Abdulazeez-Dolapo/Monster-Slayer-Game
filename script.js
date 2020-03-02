new Vue({
   el: '#app',
   data: {
      showButtons: true,
      showText: false,
      width: '80%',
      green: 'green',
      white: 'white',
      youWidth: 100,
      monWidth: 100,
      messages: [],
      monHealth: 100,
      youHealth: 100
       
   },
   methods: {
      att: function(num) {
         const youRandom = Math.ceil(Math.random() * num);
         const monRandom = Math.ceil(Math.random() * num);
         this.youWidth -= youRandom;
         this.monWidth -= monRandom; 
         this.youHealth -= youRandom;
         this.monHealth -= monRandom;
         this.messages.unshift({
            you: 'PLAYER HITS MONSTER FOR ' + youRandom,
         })
         this.messages.unshift({
            mon: 'MONSTER HITS PLAYER FOR ' + monRandom,
         })
         this.showText = true;
      },

      attack: function() {
         this.att(10);
         if(this.confirm()) {
            return
         } 
      },

      specialAttack: function() {
         this.att(20);
         if(this.confirm()) {
            return
         } 
      },

      heal: function() {
         if(this.youHealth <= 90) {
            this.youWidth += 10;
            this.youHealth += 10;

            const monRandom = Math.ceil(Math.random() * 20);
            this.youWidth -= monRandom; 
            this.youHealth -= monRandom;
            this.messages.unshift({
               you: 'PLAYER HEALS HIMSELF FOR 10'
            })
            this.messages.unshift({
               mon: 'MONSTER HITS PLAYER FOR ' + monRandom,
            })
            this.showText = true
         } else {
            this.youHealth = 100
            this.youWidth = 100
         }

         if(this.confirm()) {
            return
         }
      },

      giveup: function() {
         this.showText = false;
         this.messages.length = 0;
         this.monHealth = 100;
         this.youHealth = 100;
         this.youWidth = 100;
         this.monWidth = 100;
      },

      confirm: function() {
         if(this.monHealth <= 0) {
            if(confirm("You have won the game. Start new game")){
               this.showText = false;
               this.showButtons = false
               this.giveup()
            } else {
               this.showText = false;
               this.showButtons = true
               this.giveup()
            }
            return true;
         } else
         if(this.youHealth <= 0) {
            if(confirm("You have lost the game. Start new game")){
               this.showText = false;
               this.showButtons = false
               this.giveup()
            } else {
               this.showText = false;
               this.showButtons = true
               this.giveup()
            }
            return true;
         } else
         return false
      }
   }

})