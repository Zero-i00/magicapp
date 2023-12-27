import { IBase, IPermission } from './base.interface'


export interface IGroup extends IBase {
	name: string
	permissions: IPermission[]
}
