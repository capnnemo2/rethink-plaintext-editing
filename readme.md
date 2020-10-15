# Question 1: Plaintext Editing

_This is our frontend coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to edit text as elegantly as possible. There are a variety of different file types to experiment with as you see fit._

## Learning Already!

- I have only just recently begun to use hooks in functional components, so I do not have much experience with them...yet!

- A couple things I've never seen/used previously:
  - Next
  - `new File()` (the file object)

## At the 1 hour limit

_(disclaimer: I may have gone a bit over the 1 hr limit while writing this readme, but did not continue to work on the code)_

- What has been implemented:

  - Plain text files appear in an input field (something like a textarea would be better for longer texts).
  - The input field is responsive and updates the value (the file text).
  - Submitting the new text calls the write function, passing it the new text value.

- Where I would go next:
  - Implement the write function so that the updated value of the file (the text itself) would be written the the file array.
    - This probably means I should be updating the text value of the file in the editor and passing the entire file into the write function.
