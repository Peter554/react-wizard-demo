import 'formik'

declare module 'formik' {
  export type UseFormik<T> = {
    initialValues: T
    initialErrors: FormikErrors<unknown>
    initialTouched: FormikTouched<unknown>
    initialStatus: any
    handleBlur: (eventOrString: any) => void | ((e: any) => void)
    handleChange: (
      eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void)
    handleReset: (e: any) => void
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    resetForm: (nextState?: Partial<FormikState<T>> | undefined) => void
    setErrors: (errors: FormikErrors<T>) => void
    setFormikState: (
      stateOrCb: FormikState<T> | ((state: FormikState<T>) => FormikState<T>)
    ) => void
    setFieldTouched: (
      field: string,
      touched?: boolean,
      shouldValidate?: boolean
    ) => any
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => any
    setFieldError: (field: string, value: string | undefined) => void
    setStatus: (status: any) => void
    setSubmitting: (isSubmitting: boolean) => void
    setTouched: (touched: FormikTouched<T>) => any
    setValues: (values: T) => any
    submitForm: () => Promise<void | undefined>
    validateForm: (values?: T) => Promise<FormikErrors<T>>
    validateField: (name: string) => Promise<void> | Promise<string | undefined>
    isValid: boolean
    dirty: boolean
    unregisterField: (name: string) => void
    registerField: (name: string, { validate }: any) => void
    getFieldProps: (nameOrOptions: any) => FieldInputProps<any>
    getFieldMeta: (name: string) => FieldMetaProps<any>
    validateOnBlur: boolean
    validateOnChange: boolean
    validateOnMount: boolean
    values: T
    errors: FormikErrors<T>
    touched: FormikTouched<T>
    isSubmitting: boolean
    isValidating: boolean
    status?: any
    submitCount: number
  }
}
