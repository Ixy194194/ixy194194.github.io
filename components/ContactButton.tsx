import { FC } from 'react'

interface ContactButtonProps {
	setmodalstate: (attr: boolean) => void
}
const ContactButton: FC<ContactButtonProps> = ({setmodalstate}) => {
	return (
		<button onClick={() => {setmodalstate(true)}}>
			<span className="dark:text-gray-100">Mail</span>
		</button>
	)
}

export default ContactButton
