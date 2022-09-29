import FastestValidator from 'fastest-validator'

const validator = new FastestValidator();

const createTodolistSchema = {
    name: { type: "string", min: 1, max: 255 }
}

export const createTodolistCheck = validator.compile(createTodolistSchema)
