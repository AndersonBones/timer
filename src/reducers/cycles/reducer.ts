export interface Cycle{
    id: string,
    taskName: string,
    minutesAmount:number,
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}


export interface CyclesState{
    cycles:Cycle[]
    activeCycleId:string | null
}


import { ActionTypes } from "./actions"

export const cyclesReducer = (state: CyclesState, action: any)=>{
    switch(action.type){
        case ActionTypes.ADD_NEW_CYCLE:
            return {
                ...state,
                cycles:[...state.cycles, action.payload.newCycle],
                activeCycleId:action.payload.newCycle.id
            }
        
        case ActionTypes.INTERRUPT_CURRENT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle=>{
                    if(cycle.id == state.activeCycleId){
                        return {...cycle, interruptedDate: new Date()} // retorna a data atual do cycle ao ser interrompido
                    }else{
                        return cycle;
                    }
                }),
                activeCycleId:null
            }
        
        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
            return {
                ...state,
                cycles:state.cycles.map(cycle=>{
                    if(cycle.id == state.activeCycleId){
                        return {...cycle, finishedDate: new Date()} // retorna a data atual do cycle ao ser interrompido
                    }else{
                        return cycle;
                    }
                }),
                activeCycleId:null
            }
        
        default:
            return state
    }
}

