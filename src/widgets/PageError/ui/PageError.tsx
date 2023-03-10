import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/uiKit/Button/Button";
import styles from "./PageError.module.scss";

interface PageErrorProps {
  classes?: string;
}

export const PageError = ({ classes }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [classes])}>
      <p>{t("Something went wrong")}</p>
      <Button className={styles.button} onClick={reloadPage}>
        {t("Reload page")}
      </Button>
    </div>
  );
};
