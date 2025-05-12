

export default function Footer() {
  return (
    <footer className="border-t py-6">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
			<p className="text-sm text-muted-foreground text-center sm:text-left">
				© {new Date().getFullYear()} Sarmijavier. All rights reserved.
			</p>
			</div>
		</div>
	</footer>
  );
}