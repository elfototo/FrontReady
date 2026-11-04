import Button from "../../components/comForTreining/Button";
import Card from "../../components/comForTreining/Card";

export default function Playground() {
  return (
    <div className="flex flex-col gap-10 w-2xl mx-auto">
      <div className="mt-10">
        <h2 className="text-2xl">Buttons</h2>
        <div className="mt-5 bg-white rounded-2xl p-10 flex justify-center items-center border-1 border-gray-200">
          <div className=" flex gap-3">
            <Button variant="primary"> Primary </Button>
            <Button variant="secondary"> Secondary </Button>
            <Button disabled variant="ghost">
              Ghost
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl">Cards</h2>
        <div className="mt-5 bg-white rounded-2xl p-10 flex justify-center items-center border-1 border-gray-200">
          <div className="flex gap-3">
            <Card>
              <Card.Media>
                <div className="w-full bg-gray-500 h-[100px]"></div>
              </Card.Media>
              <Card.Title>
                <h3>Title card</h3>
              </Card.Title>
              <Card.Content>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis, culpa?
                </p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
