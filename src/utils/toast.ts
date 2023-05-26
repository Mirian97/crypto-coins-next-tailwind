import { toast } from 'react-toastify'

export function messageError(messageContent: string = 'Internal server error') {
  toast.error(messageContent, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '10px'
    }
  })
}
