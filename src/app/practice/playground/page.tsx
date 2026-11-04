import Button from "../../components/comForTreining/Button";
import Modal1 from "../../components/comForTreining/ModalComponent";
import Avatar from "../../components/comForTreining/AvatarBadge";
import Tooltip from "../../components/comForTreining/Tooltip";
import { CardCard } from "../../components/comForTreining/Card";
import { AiTwotoneSetting } from "react-icons/ai";
import {
  FormField,
  Input,
} from "../../components/comForTreining/InputFormField";


export default function Playground() {
  return (
    <div className="flex flex-col gap-10 w-3xl mx-auto py-10">
      <h2>Modal component</h2>
      <div className=" bg-[#041638] flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <Modal1 />
      </div>

      <h2>Button variants</h2>
      <div className=" bg-white flex items-center justify-center py-[100px] rounded-2xl shadow-sm gap-5">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost" disabled={false}>
          Ghost
        </Button>
      </div>

      <h2>Avatar + Badge</h2>
      <div className="bg-[#041638] flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <Avatar status="online" name="Sara  Corner" src={"../favicon.ico"} />
        <Avatar status="offline" name="Antuan" />
        <Avatar status="away" name="Gregory Support" />
      </div>

      <h2>Tooltip</h2>
      <div className=" bg-[#041638] flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <Tooltip position="left" content="Setting" delay={100}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="top" content="Setting" delay={100}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="bottom" content="Setting" delay={200}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="right" content="Setting" delay={200}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
      </div>

      <h2>Input Form Field</h2>
      <div className=" bg-blue-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <FormField>
          <Input
            label="email"
            name="email"
            error="please write correct email"
            placeholder="Enter your email"
            type="email"
            required
          />
          <Input
            label="password"
            name="password"
            error="please write correct password"
            placeholder="Enter your email"
            type="password"
            required
          />
        </FormField>
      </div>

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
