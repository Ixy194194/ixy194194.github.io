import { FC } from 'react'

interface ContactButtonProps {
	setmodalstate: (attr: boolean) => void
}
const ContactButton: FC<ContactButtonProps> = ({setmodalstate}) => {
	return (
		<button className="dark:text-gray-100 px-2 py-1 rounded-md duration-100 ease-out hover:bg-slate-400/10 dark:hover:bg-white/10 active:scale-95 flex flex-row gap-x-0.5 items-center justify-center" onClick={() => {setmodalstate(true)}}>
			{/*Icons from systemuicons.com, Licensed under the Unlicense License*/}
			<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g className="dark:stroke-gray-100" fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3.5 4.5)"><path d="m0 2v8c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-10c-1.1045695 0-2 .8954305-2 2z"/><path d="m2 3 5 3 5-3"/></g></svg>
			<span className="dark:text-gray-100">Mail</span>
		</button>
	)
}

export default ContactButton
