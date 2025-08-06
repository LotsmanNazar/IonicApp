type NoticeType = {
	title: string,
	text: string,
	type: 'info' | 'warning' | 'error'
}

type NoticesStoreType = {
	id: number,
	notices: Map<number, NoticeType>
}