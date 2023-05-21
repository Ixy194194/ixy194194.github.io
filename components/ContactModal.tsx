import { FC } from "react"

interface ContactModalProps {
	setmodalstate: (isShow: boolean) => void
}
const ContactModal: FC<ContactModalProps> = ({setmodalstate}) => {
	return (
		<div onClick={() => {setmodalstate(false)}} className="w-full h-full z-40 backdrop-blur-md absolute"></div>
	)
}
export default ContactModal
