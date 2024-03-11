import  { useEffect } from 'react'
import { Job } from './Job'
import {useDispatch , useSelector} from 'react-redux'
import { getAllJobs } from '../Slice/Jobs-slice'
export const Jobs = () => {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.jobReducers)
  console.log('state is ', state)
  useEffect(() => {
    console.log('working');
    dispatch(getAllJobs())
    console.log('after');
  }, []);
  return (
    <div>
        {state.loading && <p>...Loading</p>}
        {state.jobs && state.jobs.map((item , index)=><Job key={index} currentJob={item}/>)}
    </div>
  )
}
