import { describe, expect, test } from '@jest/globals'
import { diff } from 'jest-diff'
import { IItem, Store, Color } from '../../src/jstore/store.class'
import { resolve } from 'path'
import { faker } from '@faker-js/faker';

const filename = resolve(__dirname, 'tmp-store.json')

function generateItem(): IItem {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        colors: [ Color.BLUE ],
        price: parseInt(faker.commerce.price()),
        sku: faker.random.alphaNumeric(6),
        weight: parseInt(faker.random.numeric(2)),
        image_url: faker.image.imageUrl()
    }
}

const item01: IItem = {
    name: "Item's name",
    description: "string",
    colors: [ Color.BLUE ],
    price: 20,
    sku: "sku001",
    weight: 1,
    image_url: "https://"
}

const item02: IItem = generateItem()

describe('Store class', () => {
    
    let store: Store;

    beforeEach(() => {
        store = new Store({ filename })
    })

    test('data should be empty by default', () => {
        expect(store.data.length).toBe(0)
    })
})

describe('Store class, complete suite', () => {

    let store: Store;
    let firstItemId: number;
    beforeAll(() => {
        store = new Store({ filename })
    })

    test('add an item', () => {
        expect(store.data.length).toBe(0)
        const addedItem = store.add({...item01})
        expect(addedItem.name).toBe(item01.name)
        expect(addedItem.id).toBeGreaterThanOrEqual(1)
        expect(store.data.length).toBe(1)
        if (addedItem.id) {
            const item = store.getOne(addedItem.id)
            expect(item?.id).toBe(addedItem.id)
            firstItemId = addedItem.id
        } else {
            throw new Error('no id on addedItem')
        }
    })

    test('replace an item', () => {
        expect(store.data.length).toBe(1)
        const firstItem = store.data[0]
        if (!firstItem.id) throw new Error('no id on first product')
        const isReplaced = store.replace(firstItemId, item02)
        expect(isReplaced).toBe(true)
        expect(store.data.length).toBe(1)
        const replacedItem = store.getOne(firstItem.id)
        if (!replacedItem) throw new Error('item not found')
        expect(firstItem.name).not.toBe(replacedItem.name)
    })

    test('partial update an item', () => {
        const newName = faker.commerce.productName()
        const updatedItem = store.update(firstItemId, { name: newName })
        expect(updatedItem).toBeTruthy()
        if (updatedItem) {
            expect(updatedItem.name).toBe(newName)
        }
    })

    test('remove an item', () => {
        const removed = store.remove(firstItemId)
        expect(removed).toBeInstanceOf(Array)
        if (!removed) throw new Error('item not removed')
        expect(removed.length).toBe(1)
        expect(store.data.length).toBe(0)
        const item = store.getOne(firstItemId)
        expect(item).toBeFalsy()
    })

    test('remove non-existing item.id', () => {
        const removed = store.remove(firstItemId)
        expect(removed).toBe(false)
    })

    test('update removed item', () => {
        const updated = store.update(firstItemId, { name: 'Test' })
        expect(updated).toBe(false)
    })

    test('replace removed item', () => {
        const updated = store.replace(firstItemId, item02)
        expect(updated).toBe(false)
    })
})
