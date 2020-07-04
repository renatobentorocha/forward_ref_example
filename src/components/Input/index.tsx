import React, { forwardRef } from "react";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type Ref = React.LegacyRef<HTMLInputElement>;

const Input = (props: Props, ref: Ref) => <input {...props} ref={ref} type="text" style={{minHeight: 44, minWidth: "50%", borderRadius: 1}} />;

export default forwardRef(Input);