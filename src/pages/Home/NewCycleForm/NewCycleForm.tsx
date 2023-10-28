import { FormContainer, TaskInput, MinutesAmountInput } from "./styles"
import {useFormContext} from 'react-hook-form'
import {useContext} from 'react'
import { CyclesContext } from "../../../contexts/CyclesContext"




export const NewCycleForm = () => {
    
    const {activeCycle} = useContext(CyclesContext)
    const {register} = useFormContext()


    return (
        <FormContainer >
            <label htmlFor="task">Vou trabalhar em </label>
            <TaskInput
                placeholder='Dê um nome para o seu projeto'
                type="text"
                id="task"
                list="task-suggestions"
                disabled={!!activeCycle}
                {...register('taskName')}

            />
            <datalist id='task-suggestions'>
                <option value="projeto1"></option>
                <option value="projeto2"></option>
                <option value="projeto3"></option>
                <option value="projeto4"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                disabled={!!activeCycle}
                type="number"
                id="minutesAmount"
                placeholder='00'
                step={1}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}



