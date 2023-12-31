import { useContext } from "react"
import { HistoryContainer, HistoryList, Status } from "./styles"
import { CyclesContext } from "../../contexts/CyclesContext"
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export const History = () => {
    const { cycles } = useContext(CyclesContext)

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {
                            cycles.map(cycle => {
                                return (
                                    <tr key={cycle.id}>
                                        <td>{cycle.taskName}</td>
                                        <td>{cycle.minutesAmount} minutos</td>
                                        <td>{formatDistanceToNow(new Date(cycle.startDate),{
                                            addSuffix:true,
                                            locale:ptBR
                                        })}</td>
                                        <td>
                                            {cycle.finishedDate && (<Status statusColor="green">Concluido</Status>)}
    
                                            {cycle.interruptedDate && (<Status statusColor="red">Interrompido</Status>)}
                                            
                                            {!cycle.finishedDate && !cycle.interruptedDate && (
                                                <Status statusColor="yellow">Em andamento</Status>
                                            )}
                                        </td>
                                    </tr>
                                )
    
                            })
                        }
                    </tbody>

                    
                </table>

                {
                    cycles.length == 0 && (
                        <div>
                            <h2>Nenhuma tarefa encontrada!</h2>
                        </div>
                        
                )}
            </HistoryList>
        </HistoryContainer>
    )
}