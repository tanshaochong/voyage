const DATA = {
  good: [
    "I wanted to acknowledge John's exceptional leadership on our recent project. His clear vision, proactive decision-making, and ability to keep the team motivated were instrumental in our project's success. His dedication to our goals is truly commendable.",
    "John's communication skills have been a game-changer for our team. His regular project updates and open-door policy have created a transparent and collaborative atmosphere. It's much easier for us to stay on track and address any issues thanks to his effective communication.",
    "I was impressed by John's ability to adapt to unexpected challenges during the project. He remained calm under pressure and quickly adjusted our strategy to ensure we met our deadlines. His flexibility and problem-solving skills are a valuable asset to our team.",
  ],
  bad: [
    'John needs to improve his ability to provide clear project objectives and directions. There have been several instances where our team felt confused about our priorities and goals, which led to delays and frustration.',
    'Communication has been a significant challenge with John as our project manager. He often fails to respond to emails and calls promptly, which has caused delays in decision-making and project progress. Improved responsiveness is crucial.',
    "John's tendency to micromanage tasks is stifling our team's creativity and productivity. We would appreciate more autonomy in our work. Constant oversight is undermining our confidence and ability to perform.",
  ],
};

export async function GET(request: Request) {
  return Response.json({ data: DATA });
}
