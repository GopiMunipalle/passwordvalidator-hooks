// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  Container,
  Heading,
  P,
  Input,
  ErrorMsg,
} from './styledComponents'

function PasswordValidator() {
  const [pass, setPass] = useState('')
  const [validate, setValidate] = useState(true)

  const onChangePassword = e => {
    const newPassword = e.target.value
    setPass(newPassword)
    if (newPassword.length >= 8) {
      setValidate(false)
    } else {
      setValidate(true)
    }
  }

  return (
    <BgContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <P>Check how strong and secure is your password</P>
        <Input
          type="password"
          value={pass}
          onChange={onChangePassword}
          placeholder="Enter Password"
        />
        {validate ? (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        ) : (
          ''
        )}
      </Container>
    </BgContainer>
  )
}
export default PasswordValidator
