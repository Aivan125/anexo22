import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemComponent,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavItem {
  label: string;
  href: string;
}

interface BreadcrumbsNavProps {
  items: BreadcrumbNavItem[];
}

export function BreadcrumbsNav({ items }: BreadcrumbsNavProps) {
  if (items.length === 0) return null;

  // Mostrar todos los items, el responsive se maneja con CSS
  const displayItems = items;

  return (
    <Breadcrumb className="mb-4 sm:mb-6">
      <BreadcrumbList className="flex-wrap text-xs sm:text-sm">
        <BreadcrumbItemComponent>
          <BreadcrumbLink asChild>
            <Link
              href="/clasificacion-arancelaria"
              className="flex items-center gap-1"
            >
              <Home className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItemComponent>
        {displayItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <BreadcrumbSeparator>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItemComponent>
              {index === displayItems.length - 1 ? (
                <BreadcrumbPage className="font-medium">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItemComponent>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
