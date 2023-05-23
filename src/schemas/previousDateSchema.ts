import * as Yup from 'yup'

export const previousDateSchema = Yup.object().shape({
  previousDate: Yup.string()
    .trim()
    .required('This field is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format.Use the format "YYYY-MM-DD"')
    .test('is-future-date', 'The chosen date must be before today', (value) => {
      const currentDate = new Date().toISOString().split('T')[0]
      return value < currentDate
    })
})

export type previousDateSchemaType = Yup.InferType<typeof previousDateSchema>
