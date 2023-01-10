import { Button } from '@mui/material'

const index = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome</h1>
        <h3>Here is the best music library</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default index
