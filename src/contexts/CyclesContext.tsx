import  {createContext, useEffect, useState} from 'react'
import { ReactNode, useReducer } from 'react';
import uniqid from 'uniqid';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import { addNewCycleAction, interruptCurrentCycleAction, markCycleAsFinishedAction } from '../reducers/cycles/actions';
import { differenceInSeconds } from "date-fns"

interface CreateCycleData {
    taskName:string
    minutesAmount: number
}


interface CyclesContextType{
    cycles:Cycle[],
    activeCycle:Cycle | undefined;
    activeCycleId: string | null
    amountSeconds: number
    markCycleAsFinished: () => void
    setSecondsPassed: (seconds:number)=> void
    createNewCycle:(data:CreateCycleData) =>void
    interruptCurrentCycle:()=>void
}

interface CyclesContextProviderProps{
    children: ReactNode
}



export const CyclesContext = createContext({} as CyclesContextType)

export const CyclesContextProvider = ({children}:CyclesContextProviderProps) =>{
    const [cyclesState, dispatch] = useReducer(cyclesReducer,
        {
        cycles:[],
        activeCycleId: null
    },(initialState)=>{
        const storedState = localStorage.getItem('cycles-state');

        if(storedState){
            return JSON.parse(storedState)
        }

        return initialState
    })

    
    const {cycles, activeCycleId} = cyclesState

    

    const activeCycle = cycles.find(cycle=>cycle.id == activeCycleId) // recebe o objeto cujo id é igual ao id do activeCycledId
    // ou seja, obtem o id do cycle ativo 

    const setSecondsPassed = (seconds:number) =>{
        setSeconds(seconds)
    }

    const [amountSeconds, setSeconds] = useState(()=>{
        if(activeCycle){
            return differenceInSeconds(
                new Date(), 
                new Date(activeCycle.startDate)
            )
        }
        
        return 0
    })

    useEffect(()=>{
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('cycles-state', stateJSON)

    },[cyclesState])


    const createNewCycle = (data:CreateCycleData)=>{ // recebe os dados retornados por handleSubmit
        const newCycle:Cycle = {
            id:uniqid(),
            taskName: data.taskName,
            minutesAmount:data.minutesAmount,
            startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycle))
        
        setSeconds(0);
        // reset();
    }

    const markCycleAsFinished = ()=>{
        dispatch(markCycleAsFinishedAction())
    }


    const interruptCurrentCycle = ()=>{

        dispatch(interruptCurrentCycleAction())

    }
    return (
        <CyclesContext.Provider 
            value={{
                cycles,
                activeCycle, 
                activeCycleId, 
                markCycleAsFinished, 
                amountSeconds,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle
            }}>  

        {children}
      </CyclesContext.Provider>
    )
}