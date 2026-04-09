import {
  AddressBookIcon,
  UserSquareIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react';

type Props = {
  openModal: () => void;
};

export function EmptyState({ openModal }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex flex-col items-center justify-center py-11 px-4 text-center">
        {/* Icons */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-[#112240] rounded-full flex items-center justify-center border border-[#233554]">
            <AddressBookIcon size={34} className="text-[#64ffda]" />
          </div>

          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#233554] rounded-full flex items-center justify-center border border-[#112240]">
            <UsersThreeIcon size={22} className="text-[#ccd6f6]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#e6f1ff] mb-2">
          No postcards yet
        </h3>

        {/* Description */}
        <p className="text-[#8892b0] max-w-md mb-8 leading-relaxed">
          Be the first guest to leave a message. Messages from visitors around
          the world will appear here.
        </p>

        {/* CTA */}
        <button
          className="px-6 py-3 bg-[#64ffda] text-[#0a192f] rounded-lg font-medium transition-all hover:brightness-95 active:scale-[0.98] flex items-center gap-2 shadow-lg shadow-[#64ffda]/10"
          onClick={openModal}
        >
          <UserSquareIcon size={20} weight="bold" />
          Leave the first message
        </button>
      </div>
    </div>
  );
}
