import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import postContact from '../api/postContact'

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault()
      const formData = new FormData(e.target)
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      )
    }
  })

  return (
    <div className='contact'>
      <h2>Contact</h2>
      {mutation.isSuccess ? (
      <h3>Submitted</h3>
      ) : (
          <form onSubmit={mutation.mutate}>
            <input placeholder='Name' name='name' />
            <input placeholder='Email' name='email' type='email' />
            <input placeholder='Message' name='message' />
            <button type='submit'>Submit</button>
          </form>
      )}
    </div>
  )

}
