import fs from 'fs/promises'

type resourceId = number;

interface IStore {
    data: IItem[]
    // la fonction load va charger le fichier json et stocker la data
    load: () => Promise<void>
    // sauvegarde la data dans le fichier json
    save: () => Promise<void>
    // recupere un item de la data via son id
    getOne: (id: resourceId) => IItem
    add: (item: IItem) => IItem
    replace: (id: resourceId, item: IItem) => boolean // true = replaced || false = not found
    remove: (id: resourceId) => IItem[] | false
    update: (id: resourceId, partialItem: IPartialItem) => IItem | false
}

export enum Color {
    RED = "red",
    BLUE = "blue"
}

export interface IPartialItem {
    name?: string
    description?: string
    colors?: Color[]
    price?: number
    sku?: string
    weight?: number
    image_url?: string
}

export interface IItem extends IPartialItem{
    id?: resourceId
    name: string
    description: string
    colors: Color[]
    price: number
    sku: string
    weight: number
    image_url: string
}

export interface IStoreOptions {
    filename: string
}

export class Store implements IStore {
    data: IItem[] = [];
    filename: string;

    constructor(options: IStoreOptions) {
        this.filename = options.filename
    }

    async load() {
        console.log('Chargement de la donnée...')
        const data = await fs.readFile(this.filename, { encoding: 'utf-8' })
        this.data = JSON.parse(data)
        console.log('Chargement de la donnée terminée')
    }

    async save() {
        console.log('Sauvegarde de la donnée')
        const data = JSON.stringify(this.data, null, 4)
        await fs.writeFile(this.filename, data, { encoding: 'utf-8' })
        console.log('Sauvegarde terminée')
    }

    getOne(id: number) {
        const item = this.data.find(item => item.id === id)
        return item;
    }

    add(item: IItem): IItem {
        if (!item.id) {
            item.id = this.data[this.data.length - 1]?.id + 1 || 1
            //item.id = this.data?.at(-1)?.id + 1 || 1
        }
        this.data.push(item)
        return item;
    }

    replace(id: number, item: IItem) {
        if (!item.id) {
            item.id = id;
        }
        const index = this.data.findIndex(item => {
            return item.id === id
        })
        if (index !== -1) {
            this.data[index] = item;
            return true;
        }
        return false;
    }

    remove(id: number): IItem[] | false {
        const index = this.data.findIndex(item => item.id === id)
        if (index > -1) {
            return this.data.splice(index, 1)
        }
        return false;
    }

    update(id: number, partialItem: IPartialItem): IItem | false {
        const index = this.data.findIndex(item => item.id === id)
        if (index > -1) {
            const item = { ...this.data[index], ...partialItem, id }
            this.data.splice(index, 1, item)
            return item;
        }
        return false;
    }
    
}
