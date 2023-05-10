import clsx from "clsx";

interface Props {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

export const Hero = ({ title, subtitle, imageOn = false }: Props) => (
  <div>
    <div className={clsx("pt-[calc(theme(fontSize.display)*.5)]", "pb-[calc(theme(fontSize.display)*.7)]")}>
      <h1 className={clsx("text-display", "font-[900]", "tracking-[.15em]")}>{title}</h1>
      <p className={clsx("text-small-heading2")}> {subtitle}</p>
    </div>
    {imageOn && <figure> [画像] </figure>}
  </div>
);
Hero.displayName = "Hero";
