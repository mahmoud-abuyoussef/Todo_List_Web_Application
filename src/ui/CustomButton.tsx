export default function CustomButton({ icon }: { icon: React.ReactNode }) {
  return <button className="bg-main-color cursor-pointer rounded-[8px] p-2 font-bold text-white md:p-3">{icon}</button>;
}
