export const dynamic = "force-static";

// WordPress admin-ajax stub: unauthenticated actions return "0" like real WP,
// so vendor AJAX never receives Next's HTML error page.
export async function GET() {
    return new Response("0", {
        status: 200,
        headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
}

export const POST = GET;
