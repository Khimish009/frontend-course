import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const {t, i18n} = useTranslation()

  const handleChangeLang = () => {
    const lang = i18n.resolvedLanguage === "ru" ? "en" : "ru"
    i18n.changeLanguage(lang)
  }

  return (
    <Button onClick={handleChangeLang}>{t("Язык")}</Button>
  )
}

