import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/*  To Do - rating select component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm