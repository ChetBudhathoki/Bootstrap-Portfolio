
   $(document).ready(function () {
    $('.submit').click(function (event) {
      event.preventDefault()

      console.log('clicked');

      //input validation start
      var name = $('.name').val()
      var email = $('.email').val()
      var message = $('.message').val()
      var statusElm = $('.status')
      statusElm.empty()

      if(name.length >2) {
        statusElm.append('<div>Name is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Name is NOT valid</div>')
      }

      if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Email is NOT valid</div>')
      }

      if(message.length >=10) {
        statusElm.append('<div>Message is valid </div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Message is NOT valid </div>')
      }
    })
   })