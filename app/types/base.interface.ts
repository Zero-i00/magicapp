

export interface IBase {
	id: number
}

export interface IBaseResponse {
	status: number
}

export interface IBaseListResponse<T> {
	count: number
	next: null | boolean
	previous: null | boolean
	results: [T]
}


export interface IPermission extends IBase {
	name: string
	codename: string
	content_type: number
}
