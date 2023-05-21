import { FC } from "react"
import CloseIcon from "../public/icons/close.svg"
import MailToImage from "../public/mail-address.svg"

interface ContactModalProps {
	setmodalstate: (isShow: boolean) => void
}
const ContactModal: FC<ContactModalProps> = ({setmodalstate}) => {
	return (
		<>
			<div className="flex w-full h-full z-40 fixed items-center justify-center">
				<div onClick={() => {setmodalstate(false)}} className="w-full h-full backdrop-blur-md dark:bg-neutral-900/30 bg-neutral-200/30 "></div>
				<div className="absolute dark:text-gray-100">
					<div className="relative px-8 py-5 flex flex-col">
						<div className="cursor-pointer text-2xl flex flex-end block flex-row-reverse" onClick={() => {setmodalstate(false)}}>
							{/*Icons from systemuicons.com, Licensed under the Unlicense License*/}
							<CloseIcon
								width={40}
								height={40}
								className="bg-slate-500/10 dark:bg-neutral-200/10 rounded-full hover:scale-110 duration-150 ease-out active:scale-90 active:opacity-40"
							/>
						</div>
						<span className="font-bold tracking-widest text-4xl">CONTACT</span>
						<span className="font-bold tracking-widest text-sm">Ｉｘｙに連絡する</span>
						<div className="py-4">
							<p>連絡は以下のメールアドレスから可能です。</p>
						</div>
						<div className="bg-slate-500/20 dark:bg-neutral-200/20 rounded-lg flex items-center justify-center">
							<MailToImage
								width={160}
								height={50}
								className="dark:filter dark:invert"
							/>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
export default ContactModal
