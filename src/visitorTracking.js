const VISITOR_API_URL =
  import.meta.env.VITE_VISITOR_API_URL ??
  "https://myvercel-puce.vercel.app/api/insert_visitor";

const VISITOR_VERSION = import.meta.env.VITE_VISITOR_VERSION ?? "1";
const VISITOR_SCENE_ID = import.meta.env.VITE_VISITOR_SCENE_ID ?? "20261001";

const getDevicePlayerId = () => {
  const storedId = window.localStorage.getItem("playerId");

  if (storedId) {
    return storedId;
  }

  const id = crypto.randomUUID();
  window.localStorage.setItem("playerId", id);
  return id;
};

export const setVisitor = async () => {
  const body = {
    useraddr: getDevicePlayerId(),
    username: `visitor.${VISITOR_VERSION}.${window.location.host}`,
    scene_id: VISITOR_SCENE_ID,
  };

  try {
    const response = await fetch(VISITOR_API_URL, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Visitor request failed with status ${response.status}`);
    }

    console.log("Sent visitor request successfully", await response.text());
  } catch (error) {
    // Tracking should never prevent the portfolio from loading.
    console.error("Unable to send visitor request", error);
  }
};
