export interface IBreadcrumbProps {
  title: string;
  url: string;
}

export type BreadcrumbButtonProps = Pick<IBreadcrumbProps, "url">;
