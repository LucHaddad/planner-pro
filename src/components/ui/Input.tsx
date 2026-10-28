import { useId, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  helperText?: string;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  helperText,
  id,
  className = "",
  disabled,
  ...props
}: InputProps) {
  // Gera um ID único automático se nenhum for passado via prop
  const generatedId = useId();
  const inputId = id || generatedId;

  const baseInputStyles =
    "w-full h-11 px-3.5 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl border transition-all duration-200 outline-none placeholder:text-slate-400 disabled:opacity-60 disabled:bg-slate-50 disabled:cursor-not-allowed";

  const normalBorderStyles =
    "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  const errorBorderStyles =
    "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-red-900 dark:text-red-300";

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 select-none"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          disabled={disabled}
          className={`
            ${baseInputStyles}
            ${error ? errorBorderStyles : normalBorderStyles}
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3.5 text-slate-400 flex items-center">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <span className="text-xs text-red-600 dark:text-red-400 font-medium">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </span>
      ) : null}
    </div>
  );
}

export default Input;
