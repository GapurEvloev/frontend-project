import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const {t} = useTranslation()
  return <>{t("MAIN PAGE")}</>;
};

export default MainPage;
