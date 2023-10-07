import { useLocalStorage } from './useLocalStorage'

export const useForm = (key, initialValue, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValue)

    const clearForm = () => {
        setValues(initialValue)
    }

    const handleSubmit =  () => {
        e.preventDefault();
        cb();
    }

    const handleChanges = e => {
        localStorage.setItem([e.target.name], e.target.value)
        setValues({...values, [e.target.name]: e.target.values});
    }
    return [values, clearForm, handleChanges]
}

