import {Play, HandPalm} from 'phosphor-react'
import { useContext } from 'react';
import { CountDown } from './CountDown/CountDown';
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm } from 'react-hook-form'
import {FormProvider} from 'react-hook-form'
import { HomeContainer, StartButton,StopButton} from './styles'
import { NewCycleForm } from './NewCycleForm/NewCycleForm';
import { CyclesContext } from '../../contexts/CyclesContext';



const newCycleFormValidationSchema = zod.object({
    taskName: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount:zod.number().min(5, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos')
})


export const Home = ()=>{
    const {activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)
    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> // cria um type para o form se basendo nas regras definidas no zod

    const newCycleForm = useForm<NewCycleFormData>({
        resolver:zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            taskName:'',
            minutesAmount: 0
        }
    });

    const { handleSubmit, watch, reset} = newCycleForm

    const handleCreateNewCycle = (data: NewCycleFormData)=>{
        createNewCycle(data)
        reset()
    }
    const taskName = watch('taskName'); // observando se taskName tem algum valor
    const isSubmitDisable = !taskName //  está com algum valor digitado?


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                
                <FormProvider {...newCycleForm}>
                    <NewCycleForm></NewCycleForm>
                </FormProvider>
                    
                <CountDown ></CountDown>
                
                {activeCycle? (
                    
                <StopButton type="submit" onClick={interruptCurrentCycle}>
                    <HandPalm size={24}></HandPalm>
                    Parar
                </StopButton>
                ):(
                    <StartButton disabled={isSubmitDisable} type="submit">
                        <Play size={24}></Play> 
                        Começar
                    </StartButton>
                )}
                

            </form>     
        </HomeContainer>
    )
}