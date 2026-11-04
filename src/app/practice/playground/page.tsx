import Button from "../../components/comForTreining/Button";
import { CardCard } from "../../components/comForTreining/Card";

export default function Playground() {
  return (
    <div className="flex flex-col gap-10 w-2xl mx-auto">
      <h2>Card variants</h2>
      <div className=" bg-white flex items-center justify-center py-[100px] rounded-2xl shadow-sm gap-5 border border-gray-100">
        <CardCard>
          <CardCard.Media>
            <div className="bg-gray-400 w-full h-[300px]" />
          </CardCard.Media>

          <CardCard.Content>
            <CardCard.Title>Title</CardCard.Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            qui necessitatibus fugit eum consectetur quam veniam doloribus unde
            <CardCard.Action>action</CardCard.Action>
          </CardCard.Content>
        </CardCard>
      </div>

      <h2>Button variants</h2>
      <div className=" bg-white flex items-center justify-center py-[100px] rounded-2xl shadow-sm gap-5 border border-gray-100">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
      </div>
    </div>
  );
}
