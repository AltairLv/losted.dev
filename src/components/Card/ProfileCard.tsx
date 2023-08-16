import Image from "next/image";
import { avatar, bio, name } from "@/data/info";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center mx-auto md:max-w-2xl items-center my-6">
      <Image
        src={avatar}
        alt={name}
        className="rounded-full object-cover"
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={avatar}
        priority
      />
      <p className="w-full my-5 mx-4 text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
    </div>
  );
};

export default ProfileCard;
