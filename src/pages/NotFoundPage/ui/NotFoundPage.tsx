import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  classes?: string;
}

export const NotFoundPage = ({ classes }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.notFoundPage, {}, [classes])}>
      {t("Page not found")}
    </div>
  );
};
