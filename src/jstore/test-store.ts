import { Store, IItem, Color } from './store.class'

async function test_store() {
    const store = new Store({ filename: 'items.json' })
    await store.load()

    const addedItem: IItem = store.add({
        name: "Item's name",
        description: "string",
        colors: [ Color.BLUE ],
        price: 20,
        sku: "sku001",
        weight: 1,
        image_url: "https://"
    })

    const updatedItem = store.update(addedItem.id, { name: 'NewName' })

    if (updatedItem && updatedItem.name === 'NewName') {
        console.log('good update')
    } else {
        throw new Error('bad update')
    }

    await store.save() 

    console.log('store len', store.data.length)
    // store.remove(updatedItem.id)
    console.log('store len', store.data.length)

    await store.save()
}

test_store();
