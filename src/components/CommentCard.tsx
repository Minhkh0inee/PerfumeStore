import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CommentCard = () => {
  return (
    <div className="rounded-lg flex flex-col gap-y-3 p-5 border-[1px]">
      <p className="montserrat-regular">
        "Great experience buying perfume online. The customer service was
        exceptional, and the product was exactly as described!"
      </p>

      <div className="flex items-center gap-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="montserrat-bold text-sm w-40 leading-tight">
          Nguyen Huynh Minh Khoi
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
