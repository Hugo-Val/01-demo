import { FC, CSSProperties } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

const style : CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
};

const style2 : CSSProperties = {
    color: "black",
    textDecoration: "none",
};

interface Props {
    text: string,
    href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();
    return (
        <Link style={asPath === href ? style : style2} href={href}>
            {text}
        </Link>

    );
}
