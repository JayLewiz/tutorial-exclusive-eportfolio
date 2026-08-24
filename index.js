// template_ygog665
// service_rcxsp6h
// cWo3rMKR9MIHVIVzV

function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_rcxsp6h',
      'template_ygog665',
      event.target,
      'cWo3rMKR9MIHVIVzV'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email.email.com"
      )
    })

} 
  
