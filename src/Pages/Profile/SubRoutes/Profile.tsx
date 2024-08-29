import { useTheme, } from '@mui/material'
import linearGradient from '@/assets/theme/functions/linearGradient'
import BorderedButton from '@/Components/Button/BorderedButton'
import Paper from '@mui/material/Paper'
import CameraIcon from '@mui/icons-material/CameraEnhance'
import IconButton from '@/Components/Button/IconButton'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import LineDivider from '@/Components/LineDivider'

const Profile = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let coverBackground = linearGradient(gradients.secondary.main, gradients.secondary.state)
  let iconColor = linearGradient(gradients.info.main, gradients.info.state)


  return (
    <div className="flex flex-col relative px-1 ">
      <Paper className='h-[280px] w-full rounded-md' sx={{ background: coverBackground }}>
        <BorderedButton style={{ float: 'right', padding: '0.6rem', color: 'white', borderColor: 'white', marginTop: '1rem', marginRight: '1rem' }} >
          <CameraIcon fontSize='small' style={{ marginRight: '0.4rem' }} />
          <span>UPDATE COVER</span>
        </BorderedButton>
      </Paper>

      <div className='flex flex-row gap-4 mx-5 flex-grow rounded-md top-[-80px] relative'>
        <div className='flex-[0.3] bg-white rounded-md shadow-md '>

          <div className='h-[175px] relative flex flex-col items-center justify-center'>

            <div
              className='h-[150px] absolute top-[10%] w-[150px] rounded-full shadow-lg'
              style={{ background: coverBackground }}
            />

            <IconButton
              style={{
                border: '3px solid white',
                background: iconColor,
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '100px',
                position: 'relative', zIndex: 10, right: '-45px', top: '57px'
              }}
            >
              <CameraIcon fontSize='small' color={'inherit'} />
            </IconButton>
          </div>

          <MainSpan className='text-center'>Jose Paulo M. Dela Cruz</MainSpan>
          <SubSpan className='flex justify-center text-sm'>Software Engineer</SubSpan>

          <div className='pt-3'>
            <LineDivider />
          </div>

          <div className='p-3 flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
              <MainSpan className='text-sm font-bold'>Profile Details</MainSpan>

              <BorderedButton variant='info' >
                Edit
              </BorderedButton>
            </div>
            <div>

            </div>
            <SubSpan style={{padding: '0.5rem 0 0.5rem'}}>Address</SubSpan>
            <SubSpan className='text-[0.65rem] bg-gray-50 text-left rounde-md font-light' style={{color: 'black'}}>
              Blk 24 Lot 18 Phase 2 Saint Joseph Vilalge 6. Brgy. Butong Cabuyao Laguna
            </SubSpan>

          </div>

          <div className='h-[400px]'></div>
        </div>

        <div className='bg-white flex self-start flex-1'>test</div>
      </div>



    </div>
  )
}

export default Profile;

